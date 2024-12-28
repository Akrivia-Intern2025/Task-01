import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.scss']
})
export class RegistrationComponent  implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    onSubmit(form:any){
        console.log(form.value)
    }

    openLoginPage(){
        this.router.navigateByUrl("");
    }
}
<<<<<<< HEAD

=======
>>>>>>> bd93e6385bc15d841913a3a4eb5085d4cd101e4d
