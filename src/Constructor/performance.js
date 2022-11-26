export class performance {
    userId = 0
    kind = { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" }
    data = [{ value: 0, kind: 0, axeX: "" }, { value: 0, kind: 0, axeX: "" }, { value: 0, kind: 0, axeX: "" }, { value: 0, kind: 0, axeX: "" }, { value: 0, kind: 0, axeX: "" }, { value: 0, kind: 0, axeX: "" }]
    constructor(data) {
        let i = 0
        let y = 0
        if (data && data.userId) {
            this.userId = data.userId
        }
        for (i in data.kind) {
            if (data && data.kind[i]) {
                this.kind[i] = data.kind[i]
            }
        }
        for (y in data.data) {
            if (data && data.data[y] && data.data[y].value) {
                this.data[y].value = data.data[y].value
            }
            if (data && data.data[y] && data.data[y].kind) {
                this.data[y].kind = data.data[y].kind
            }
            if (data && data.data[y] && data.data[y].axeX) {
                this.data[y].axeX = data.data[y].axeX
            }
        }
    }
}