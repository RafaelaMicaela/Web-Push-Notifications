// src/hooks/useNotification.ts
export type NotificationOptions = {
  body?: string;
  icon?: string;
};

export function useNotification() {
  const isSupported = "Notification" in window;

  const solicitarPermissao = async (): Promise<NotificationPermission | null> => {
    if (!isSupported) {
      console.warn("Navegador não suporta notificações.");
      return null;
    }

    return await Notification.requestPermission();
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
      new Notification(title, options);
    } else {
      console.warn("Permissão de notificação ainda não foi concedida.");
    }
  };

  return {
    isSupported,
    solicitarPermissao,
    mostrarNotificacao,
  };
}
