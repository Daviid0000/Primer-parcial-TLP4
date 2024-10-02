class ReservationManager {
    // que sea estático quiere decir que no será necesario crear una instancia de la clase ReservationManager para acceder a Instance o al método getInstance.
    private static Instance: ReservationManager;

    private constructor() {};

    // Si no existe una instancia de la clase se devuelve una nueva instancia, de lo contrario, se devuelve una instancia de la misma clase ya creada.
    public static getInstance() {
        if (!ReservationManager.Instance) {
            return ReservationManager.Instance = new ReservationManager();
        }
        return ReservationManager.Instance;
    }
}
const manager1 = ReservationManager.getInstance();
const manager2 = ReservationManager.getInstance();
console.log(manager1 === manager2);
