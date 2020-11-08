export function toCurrency(value) {
    return Intl.NumberFormat("es-co", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    })
        .format(value)
        .replace(/\s/g, "");
}

export function toPercent(value) {
    return Intl.NumberFormat("es-co", { style: "percent", minimumFractionDigits: 0 })
        .format(value)
        .replace(/\s/g, "");
}
