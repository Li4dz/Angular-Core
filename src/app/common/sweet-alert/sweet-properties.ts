import { SweetAlertOptions } from "sweetalert2";

export class SwalProperties {

    title : string;
    text : string;
    showCancelButton : boolean;
    confirmButtonColor : string;
    cancelButtonColor : string;
    confirmButtonText : string;
    cancelButtonText : string;
   
    init(){
        this.title = "";
        this.text = "";
        this.confirmButtonColor = "";
        this.cancelButtonColor = "";
        this.confirmButtonText = "";
        this.cancelButtonText = "";
    }
   
}

export class ConfirmButtonSwal extends SwalProperties {

    constructor() {
        super();
        this.showCancelButton = true;
        this.confirmButtonColor = '#3085d6';
        this.cancelButtonColor = '#d33';   
        var asd : SweetAlertOptions;
    }
}

export class Confirm implements SweetAlertOptions {
    
}

// class Base {
//     myColor: string;
//     constructor() {
//         this.init();
//         console.log(this.myColor);
//     }
//     init() {
//         this.myColor = "blue";
//     }
// }

// class Derived extends Base {
//     init() {
//         super.init();
//         this.myColor = "red";
//     }
// }

// // Prints "red" as expected
// const x = new Derived();