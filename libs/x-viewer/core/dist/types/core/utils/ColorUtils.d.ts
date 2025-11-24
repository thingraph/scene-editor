export declare class ColorUtils {
    static color2rgba(style: string): [number, number, number, number];
    /**
     * Converts float color array in format "[0.0, 1.0, 0.0, 1.0]" to css color "rgba(0, 255, 0, 1.0)".
     */
    static floatArray2CssColor(rgba: number[]): string;
    /**
     * Converts color string in format "rgba(255, 255, 255, 1)" to float number array.
     */
    static cssColor2FloatArray(colorStr: string): number[];
    /**
     * Converts rgb or rgba to hex number.
     * E.g., [0.0, 1.0, 0.0] to 0x00ff00
     * @param rgba Color value is between 0 and 1.
     */
    static floatArray2Hex(rgba: number[]): number;
    /**
     * Converts color value from float(0.0-1.0) to int (0-255)
     */
    private static float2Int;
    /**
     * Converts color value from int (0-255) to float(0.0-1.0)
     */
    private static int2Float;
}
