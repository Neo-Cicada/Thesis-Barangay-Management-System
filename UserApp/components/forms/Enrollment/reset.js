
export const reset = ({setFormData}) => {

    setFormData = ({

        childInfo: {
            childFirstName: "",
            childLastName: "",
            childMiddleName: "",
            childBirthDate: ""
        },
        fatherInfo: {
            fatherFirstName: "",
            fatherLastName: "",
            fatherOccupation: "",
            fatherPhoneNumber: "",
            fatherEmail: ""
        },
        motherInfo: {
            motherFirstName: "",
            motherLastName: "",
            motherOccupation: "",
            motherPhoneNumber: "",
            motherEmail: ""
        },
        guardianInfo: {
            guardianFirstName: "",
            guardianLastName: "",
            guardianPhoneNumber: "",
            guardianEmail: ""
        },


    });
}