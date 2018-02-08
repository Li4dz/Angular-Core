import swal, { SweetAlertType } from "sweetalert2";
import { Injectable } from "@angular/core";
import { SwalProperties } from "./sweet-properties";
import { Type } from "@angular/compiler/src/output/output_ast";


@Injectable()
export class SweetAlert {

    simple(text : string){
        swal(text);
    }    

    confirm(properties : SwalProperties, success ){
        swal({
            title: properties.title,
            text: properties.text,
            type: 'warning',
            showCancelButton: properties.showCancelButton,
            confirmButtonColor: properties.confirmButtonColor,
            cancelButtonColor: properties.cancelButtonColor,
            confirmButtonText: properties.confirmButtonText
          }).then((result) => {
            if (result.value) {
                 success();
            }
          })
    }

    alertDemo(demoFunction){
        demoFunction();
        // swal("Hello World");
        // console.log('Hola Mundo');
    }

}