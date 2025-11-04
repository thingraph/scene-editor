// Load monaco-editor from CDN and attach it to window; use window.monaco afterwards
export function importMonaco() {
  // Credit: https://github.com/matt-oconnell/vue-monaco-editor/blob/master/src/MonacoLoader.js
  let loaderPending = false
  const loaderCallbacks: any[] = []

  function onAmdLoaderLoad() {
    let currentCallback = loaderCallbacks.shift()
    while (currentCallback) {
      window.clearTimeout(currentCallback.timeout)
      currentCallback.resolve()
      currentCallback = loaderCallbacks.shift()
    }
  }

  function onAmdLoaderError(err: any) {
    let currentCallback = loaderCallbacks.shift()
    while (currentCallback) {
      window.clearTimeout(currentCallback.timeout)
      currentCallback.reject(err)
      currentCallback = loaderCallbacks.shift()
    }
  }

  function ensureMonacoIsLoaded(srcPath: any): Promise<void> {
    return new Promise((resolve, reject) => {
      if ((window as any).monaco) {
        resolve()
        return
      }
      const config = {
        paths: {
          vs: srcPath + '/vs'
        }
      }
      const loaderUrl = `${config.paths.vs}/loader.js`

      const timeout = window.setTimeout(() => {
        reject(new Error("Couldn't load monaco editor after 60s"))
      }, 60000)

      loaderCallbacks.push({
        resolve: () => {
          if (loaderPending) {
            ;(window as any).require.config(config)
            loaderPending = false
          }

          // Cross-domain workaround
          ;(window as any).MonacoEnvironment = {
            getWorkerUrl() {
              return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
                  self.MonacoEnvironment = {
                    baseUrl: '${srcPath}'
                  };
                  importScripts('${srcPath}/vs/base/worker/workerMain.js');`)}` // eslint-disable-line
            }
          }

          ;(window as any).require(['vs/editor/editor.main'], resolve)
        },
        timeout,
        reject
      })

      if (!loaderPending) {
        if ((window as any).require) {
          onAmdLoaderLoad()
        } else {
          const loaderScript = window.document.createElement('script')
          loaderScript.type = 'text/javascript'
          loaderScript.src = loaderUrl
          loaderScript.addEventListener('load', onAmdLoaderLoad)
          loaderScript.addEventListener('error', onAmdLoaderError)
          document.body.appendChild(loaderScript)
          loaderPending = true
        }
      }
    })
  }

  async function init() {
    try {
      await ensureMonacoIsLoaded(
        'https://talcloud.oss-cn-beijing-internal.aliyuncs.com/k8s-fe/monaco-editor/min'
      )
      console.warn('monaco-editor loaded')
    } catch (e) {
      console.error('Failure during loading monaco editor:', e)
    }
  }
  init()
}
