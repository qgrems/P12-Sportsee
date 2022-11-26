export class activity {
    userId = 0
    sessions = [{ day: "", kilogram: 0, calories: 0, axeX: "1" }, { day: "", kilogram: 0, calories: 0, axeX: "2" }, { day: "", kilogram: 0, calories: 0, axeX: "3" }, { day: "", kilogram: 0, calories: 0, axeX: "4" }, { day: "", kilogram: 0, calories: 0, axeX: "5" }, { day: "", kilogram: 0, calories: 0, axeX: "6" }, { day: "", kilogram: 0, calories: 0, axeX: "7" }]

    constructor(data) {
        let i = 0
        if (data && data.userId) {
            this.userId = data.userId
        }
        for (i in data.sessions) {
            if (data && data.sessions[i] && data.sessions[i].day) {
                this.sessions[i].day = data.sessions[i].day
            }
            if (data && data.sessions[i] && data.sessions[i].kilogram) {
                this.sessions[i].kilogram = data.sessions[i].kilogram
            }
            if (data && data.sessions[i] && data.sessions[i].calories) {
                this.sessions[i].calories = data.sessions[i].calories
            }
            if (data && data.sessions[i] && data.sessions[i].axeX) {
                this.sessions[i].axeX = data.sessions[i].axeX
            }
        }

    }
}