const makeHTML = {

newPendingMentee:(mentor, mentee)=>{
    return `
        <h1 style="color: green; text-align: center">
            Hola ${mentor.firstName}
        </h1>
        <p style="text-align: center">
            ${mentee.firstName} ${mentee.lastName} quiere ser tu mentor. Ingresa a Mentor Me para confirmar tu mentoría.
        </p>
        `
},

newPendingMentor:(mentee, mentor)=>{
    return `
        <h1 style="color: green; text-align: center">
            Hola ${mentee.firstName}
        </h1>
        <p style="text-align: center">
            ${mentor.firstName} ${mentor.lastName} quiere ser tu mentor. Ingresa a Mentor Me para confirmar tu mentoría.
        </p>
        `
}

}

module.exports = makeHTML