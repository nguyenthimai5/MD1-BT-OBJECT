class Temperature{
    celsius;

    constructor(celsius) {
        this.celsius = celsius;
    }
    setCelsius(celsius){
        this.celsius=celsius
    }
    getCelsius(){
        return  ((this.celsius*1.8000) + 32.00)
    }
    getToKenvin(){
        return (this.celsius + 273.15 )
    }
}