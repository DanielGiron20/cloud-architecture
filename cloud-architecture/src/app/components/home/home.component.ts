import { Component, HostListener, OnInit } from '@angular/core';

interface CloudModel { code: string; name: string; description: string; detail: string; icon: string; }
interface Concept { number: string; title: string; description: string; tag: string; }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentYear = new Date().getFullYear();
  menuOpen = false;
  scrolled = false;
  activeModel = 1;
  activeDeployment = 0;

  models: CloudModel[] = [
    { code: '01 / IAAS', name: 'Infraestructura', description: 'Infrastructure as a Service', detail: 'Servidores virtuales, redes y almacenamiento bajo demanda. El cliente administra el sistema operativo, sus aplicaciones y datos.', icon: 'layers' },
    { code: '02 / PAAS', name: 'Plataforma', description: 'Platform as a Service', detail: 'Entornos de ejecución preconfigurados para desarrollar y desplegar aplicaciones sin administrar directamente la infraestructura.', icon: 'code' },
    { code: '03 / SAAS', name: 'Software', description: 'Software as a Service', detail: 'Aplicaciones listas para utilizar a través de Internet, sin instalaciones ni mantenimiento directo de la infraestructura.', icon: 'grid' }
  ];

  deployments = [
    { name: 'Pública', eyebrow: 'PUBLIC CLOUD', description: 'Infraestructura compartida, administrada por proveedores externos. Ofrece escalabilidad y evita grandes inversiones iniciales.', label: 'Infraestructura compartida' },
    { name: 'Privada', eyebrow: 'PRIVATE CLOUD', description: 'Recursos de uso exclusivo de una organización. Facilita el control, la seguridad y el cumplimiento de requisitos internos.', label: 'Entorno exclusivo' },
    { name: 'Híbrida', eyebrow: 'HYBRID CLOUD', description: 'Integra entornos públicos y privados para combinar control sobre datos sensibles con flexibilidad para escalar.', label: 'Lo mejor de ambos entornos' }
  ];

  concepts: Concept[] = [
    { number: '01', title: 'Desacoplamiento', description: 'Los servicios se diseñan para evolucionar con la menor dependencia posible entre sí.', tag: 'INDEPENDENCIA' },
    { number: '02', title: 'Escalabilidad horizontal', description: 'Los componentes que reciben mayor carga pueden ampliarse de manera selectiva.', tag: 'CRECIMIENTO' },
    { number: '03', title: 'Resiliencia', description: 'El aislamiento de fallos permite que otras partes del sistema sigan funcionando.', tag: 'CONTINUIDAD' },
    { number: '04', title: 'Datos descentralizados', description: 'Cada servicio puede gestionar sus propios datos según sus responsabilidades.', tag: 'AUTONOMÍA' }
  ];

  ngOnInit(): void { this.onScroll(); }

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled = window.scrollY > 24; }

  @HostListener('document:keydown.escape')
  closeMenu(): void { this.menuOpen = false; }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  selectModel(index: number): void { this.activeModel = index; }
  selectDeployment(index: number): void { this.activeDeployment = index; }
  navigate(): void { this.menuOpen = false; }
}
