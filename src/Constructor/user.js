export class user {
    id = 0
    userInfos = { firstName: "", lastName: "", age: 0 }
    todayScore = 0
    keyData = { calorieCount: 0, proteinCount: 0, carbohydrateCount: 0, lipidCount: 0 }
    constructor(data) {

        if (data && data.id) {
            this.id = data.id
        }
        if (data && data.userInfos && data.userInfos.firstName) {
            this.userInfos.firstName = data.userInfos.firstName
        }
        if (data && data.userInfos && data.userInfos.lastName) {
            this.userInfos.lastName = data.userInfos.lastName
        }
        if (data && data.userInfos && data.userInfos.age) {
            this.userInfos.age = data.userInfos.age
        }
        if (data && data.todayScore) {
            this.todayScore = data.todayScore
        }
        if (data && data.keyData && data.keyData.calorieCount) {
            this.keyData.calorieCount = data.keyData.calorieCount
        }
        if (data && data.keyData && data.keyData.proteinCount) {
            this.keyData.proteinCount = data.keyData.proteinCount
        }
        if (data && data.keyData && data.keyData.carbohydrateCount) {
            this.keyData.carbohydrateCount = data.keyData.carbohydrateCount
        }
        if (data && data.keyData && data.keyData.lipidCount) {
            this.keyData.lipidCount = data.keyData.lipidCount
        }


    }
}