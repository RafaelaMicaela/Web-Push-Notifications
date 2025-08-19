import  { useState } from "react";
import { Button, Stack, Typography, Alert, Chip } from "@mui/material";
import { useNotification } from "../../hooks/useNotification";

const Notificacao: React.FC = () => {
  const {
    isSupported,
    solicitarPermissao,
    mostrarNotificacao,
    getPermissionStatus,
    isMobile,
    currentPermission
  } = useNotification();

  const [permissionStatus, setPermissionStatus] = useState<string>(currentPermission);

  const handlePermissao = async () => {
    console.log("Solicitando permissão...");
    console.log("Status atual:", getPermissionStatus());
    console.log("É mobile:", isMobile());

    const perm = await solicitarPermissao();
    setPermissionStatus(perm || "error");

    if (perm === "granted") {
      alert("✅ Permissão concedida!");
    } else if (perm === "denied") {
      alert("❌ Permissão negada. Para habilitar:\n\n" +
            "🔧 Chrome Mobile: Menu > Configurações > Configurações do site > Notificações\n" +
            "🔧 Firefox Mobile: Menu > Configurações > Privacidade e segurança > Permissões");
    } else {
      alert("⚠️ Não foi possível obter permissão. Tente novamente ou verifique as configurações do navegador.");
    }
  };

  const handleNotificacao = () => {
    if (permissionStatus === "granted") {
      mostrarNotificacao("🔔 Teste de Notificação", {
        body: "Esta é uma notificação de teste do seu aplicativo!",
        icon: "/vite.svg",
        vibrate: [100, 50, 100],
        requireInteraction: true
      });
    } else {
      alert("❌ Você precisa conceder permissão primeiro!");
    }
  };

  const getStatusColor = (status: string): "success" | "error" | "warning" | "default" => {
    switch (status) {
      case "granted": return "success";
      case "denied": return "error";
      case "default": return "warning";
      default: return "default";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "granted": return "✅ Permitido";
      case "denied": return "❌ Bloqueado";
      case "default": return "⚠️ Pendente";
      default: return "❓ Desconhecido";
    }
  };

  if (!isSupported) {
    return (
      <Stack spacing={2}>
        <Alert severity="error">
          ❌ Notificações não são suportadas neste navegador.
        </Alert>
        <Typography variant="body2">
          Navegadores suportados: Chrome, Firefox, Safari, Edge
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack spacing={3}>
      <Typography variant="h6">🔔 Teste de Notificações Web</Typography>
      {/* Status da permissão */}
      <Stack spacing={1}>
        <Typography variant="subtitle2">Status da Permissão:</Typography>
        <Chip
          label={getStatusText(permissionStatus)}
          color={getStatusColor(permissionStatus)}
          variant="outlined"
        />
      </Stack>

      {/* Informações do dispositivo */}
      <Stack spacing={1}>
        <Typography variant="subtitle2">Informações do Dispositivo:</Typography>
        <Typography variant="body2" color="text.secondary">
          📱 Dispositivo: {isMobile() ? "Mobile" : "Desktop"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          🌐 Navegador: {navigator.userAgent.includes('Chrome') ? 'Chrome' :
                        navigator.userAgent.includes('Firefox') ? 'Firefox' :
                        navigator.userAgent.includes('Safari') ? 'Safari' : 'Outro'}
        </Typography>
      </Stack>

      {/* Alertas específicos para mobile */}
      {isMobile() && permissionStatus === "denied" && (
        <Alert severity="warning">
          <Typography variant="body2">
            <strong>Para habilitar notificações no mobile:</strong><br/>
            1. Toque no ícone 🔒 na barra de endereços<br/>
            2. Ative "Notificações"<br/>
            3. Recarregue a página
          </Typography>
        </Alert>
      )}

      {/* Botões */}
      <Stack spacing={2}>
        <Button
          variant="contained"
          onClick={handlePermissao}
          disabled={permissionStatus === "granted"}
          size="large"
        >
          {permissionStatus === "granted" ? "✅ Permissão Concedida" : "🔔 Solicitar Permissão"}
        </Button>

        <Button
          variant="outlined"
          onClick={handleNotificacao}
          disabled={permissionStatus !== "granted"}
          size="large"
        >
          📨 Enviar Notificação de Teste
        </Button>
      </Stack>

      {/* Debug info (apenas para desenvolvimento) */}
      {process.env.NODE_ENV === 'development' && (
        <Alert severity="info">
          <Typography variant="caption">
            <strong>Debug:</strong> Permission = {permissionStatus}
          </Typography>
        </Alert>
      )}
    </Stack>
  );
};

export default Notificacao;
