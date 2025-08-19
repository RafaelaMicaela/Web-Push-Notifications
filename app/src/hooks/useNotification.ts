// src/hooks/useNotification.ts
export type NotificationOptions = {
  body?: string;
  icon?: string;
  badge?: string;
  vibrate?: number[];
  requireInteraction?: boolean;
  silent?: boolean;
};

export function useNotification() {
  const isSupported = "Notification" in window;

  const solicitarPermissao = async (): Promise<NotificationPermission | null> => {
    if (!isSupported) {
      console.warn("Navegador não suporta notificações.");
      return null;
    }

    // Verificar se já temos permissão
    if (Notification.permission === "granted") {
      return "granted";
    }

    // Verificar se está bloqueado permanentemente
    if (Notification.permission === "denied") {
      console.warn("Notificações foram bloqueadas pelo usuário. Para habilitar, vá nas configurações do navegador.");
      return "denied";
    }

    try {
      // Para dispositivos móveis, adicionar um delay antes de solicitar
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const permission = await Notification.requestPermission();
      
      // Log detalhado para debug
      console.log("Resultado da solicitação de permissão:", permission);
      console.log("User agent:", navigator.userAgent);
      console.log("É mobile:", /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
      
      return permission;
    } catch (error) {
      console.error("Erro ao solicitar permissão:", error);
      return null;
    }
  };

  const mostrarNotificacao = (
    title: string,
    options?: NotificationOptions
  ): void => {
    if (!isSupported) {
      console.warn("Notificações não são suportadas neste navegador.");
      return;
    }

    if (Notification.permission === "granted") {
      // Configurações otimizadas para mobile
      const notificationOptions: NotificationOptions = {
        body: options?.body || "Nova notificação",
        icon: options?.icon || "/vite.svg",
        badge: options?.badge || "/vite.svg",
        vibrate: options?.vibrate || [100, 50, 100],
        requireInteraction: options?.requireInteraction !== false,
        silent: options?.silent || false,
        ...options
      };

      try {
        const notification = new Notification(title, notificationOptions);
        
        notification.onclick = () => {
          console.log("Notificação clicada");
          window.focus();
          notification.close();
        };

        notification.onerror = (error) => {
          console.error("Erro na notificação:", error);
        };

        // Auto-close após 5 segundos se não for requireInteraction
        if (!notificationOptions.requireInteraction) {
          setTimeout(() => notification.close(), 5000);
        }
        
      } catch (error) {
        console.error("Erro ao criar notificação:", error);
      }
    } else {
      console.warn(`Permissão de notificação negada. Status atual: ${Notification.permission}`);
    }
  };

  const getPermissionStatus = (): string => {
    if (!isSupported) return "not-supported";
    return Notification.permission;
  };

  const isMobile = (): boolean => {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  return {
    isSupported,
    solicitarPermissao,
    mostrarNotificacao,
    getPermissionStatus,
    isMobile,
    currentPermission: Notification.permission
  };
}
