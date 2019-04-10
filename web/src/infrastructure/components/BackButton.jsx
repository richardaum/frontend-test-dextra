import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import MuiLink from "@material-ui/core/Link";

export default withRouter(function BackButton({ children, history }) {
  const handleCreateClick = useCallback(() => {
    history.goBack();
  });
  return (
    <MuiLink component="button" onClick={handleCreateClick}>
      {children || "Voltar"}
    </MuiLink>
  );
});
