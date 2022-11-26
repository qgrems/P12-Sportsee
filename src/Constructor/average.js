export class average {
    userId = 0
    sessions = [{ day: 0, sessionLength: 0, axeX: "L" }, { day: 0, sessionLength: 0, axeX: "M" }, { day: 0, sessionLength: 0, axeX: "M" }, { day: 0, sessionLength: 0, axeX: "j" }, { day: 0, sessionLength: 0, axeX: "V" }, { day: 0, sessionLength: 0, axeX: "S" }, { day: 0, sessionLength: 0, axeX: "D" }]
    constructor(data) {
        let i = 0
        if (data && data.userId) {
            this.userId = data.userId
        }
        for (i in data.sessions) {
            if (data && data.sessions[i] && data.sessions[i].day) {
                this.sessions[i].day = data.sessions[i].day
            }
            if (data && data.sessions[i] && data.sessions[i].sessionLength) {
                this.sessions[i].sessionLength = data.sessions[i].sessionLength
            }
            if (data && data.sessions[i] && data.sessions[i].axeX) {
                this.sessions[i].axeX = data.sessions[i].axeX
            }
        }
    }
}