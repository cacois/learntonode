var StatusEnum = {"SUBMITTED":1, "ACCEPTED":2, "REJECTED":3}
Object.freeze(StatusEnum)

var ActivityEnum = {"ACTIVE":1, "INACTIVE":2}
Object.freeze(ActivityEnum)

module.exports = {

  StatusEnum: StatusEnum,
  ActivityEnum: ActivityEnum

}