import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({ 

  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {
    
  mostrarChat=false;
  usuarioLogeado: any;
  nuevoMensaje: string = '';
  mensajes: any = [
    {
      emisor: "N0HvBOr8geZnCfPzpYp1cVjjdPf2",
      texto: "Holas"
    },
    {
      emisor: "id",
      texto: "Hola que tal"
    },
    {
      emisor: "N0HvBOr8geZnCfPzpYp1cVjjdPf2",
      texto: "Todo ok"
    },
    {
      emisor: "id",
      texto: "Que bueno"
    },
    {
      emisor: "N0HvBOr8geZnCfPzpYp1cVjjdPf2",
      texto: "Moshimoshi"
    },
    {
      emisor: "id",
      texto: "UwU"
    }
  ];
  constructor(private authService: AuthService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;
    });
  }
  ngAfterViewChecked(){
    this.changeDetector.detectChanges();
  }
  enviarMensaje() {

    if(this.nuevoMensaje=="") return;
    console.log(this.nuevoMensaje)
    let mensaje =  {
      emisor: this.usuarioLogeado.uid,
      texto: this.nuevoMensaje
    }
    this.mensajes.push(mensaje);

    this.nuevoMensaje = "";

  };
    
};