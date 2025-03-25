import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private messageService: MessageService) {}

  throwError(message: string): void {
    this.showNotification('error', message);
  }

  showWarning(message: string): void {
    this.showNotification('warn', message);
  }

  showSuccess(message: string): void {
    this.showNotification('success', message);
  }

  showInfo(message: string): void {
    this.showNotification('info', message);
  }

  private showNotification(severity: string, message: string): void {
    this.messageService.add({
      key: 'toast',
      severity,
      summary: severity.toUpperCase(),
      detail: message,
      life: 3000,
    });
  }
}
