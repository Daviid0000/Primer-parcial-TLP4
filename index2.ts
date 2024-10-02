interface Observer {
    actualizar(orden: string): void
}

class Restaurant {
    actualizar(): void {
        console.log("Listo para servir")
    }
}