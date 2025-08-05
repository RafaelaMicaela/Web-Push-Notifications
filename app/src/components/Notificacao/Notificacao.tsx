// src/components/Notificacao.tsx
import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useNotification } from "../../hooks/useNotification";

const Notificacao: React.FC = () => {
  const { isSupported, solicitarPermissao, mostrarNotificacao } = useNotification();

  const handlePermissao = async () => {
    const perm = await solicitarPermissao();
    if (perm === "granted") {
      alert("✅ Permissão concedida!");
    } else if (perm === "denied") {
      alert("❌ Permissão negada.");
    } else {
      alert("⚠️ Permissão ignorada.");
    }
  };

  const handleNotificacao = () => {
    mostrarNotificacao("🔔 Alerta do Sistema", {
      body: "Você recebeu uma nova notificação!",
      icon: "/logo192.png",
    });
  };

  if (!isSupported) {
    return <Typography>Notificações não são suportadas neste navegador.</Typography>;
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Teste com Hook de Notificação</Typography>

      <Button variant="contained" onClick={handlePermissao}>
        Solicitar Permissão
      </Button>

      <Button variant="outlined" onClick={handleNotificacao}>
        Enviar Notificação
      </Button>
    </Stack>
  );
};

export default Notificacao;
