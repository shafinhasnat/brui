import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloseIcon from "@material-ui/icons/Close";
import { Button, makeStyles, Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles({
  card: {
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    minHeight: "100%",
    background: "white",
    borderRadius: "10px",
  },
  loadingScreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  circularProgress: {
    color: "#3A9097",
  },
});

const Card = (props) => {
  const classes = useStyles();
  const {
    isLoading,
    children,
    onClose,
    onReload,
    title,
    style,
    containerStyle,
    button,
  } = props;

  return (
    <div className={classes.card} style={containerStyle}>
      <div
        style={{
          padding: "20px",
          background: "#F5F5F5",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        {!!onClose && (
          <div style={{ display: "inline", float: "right" }}>
            <Button onClick={onClose}>
              <CloseIcon />
            </Button>
          </div>
        )}
        {!!onReload && (
          <div style={{ display: "inline", float: "right" }}>
            <Button onClick={onReload}>
              <RefreshIcon />
            </Button>
          </div>
        )}
        {!!button && (
          <div style={{ display: "inline", float: "right" }}>{button}</div>
        )}
        <div>
          <Typography className={classes.title}>{title}</Typography>
        </div>
      </div>
      <div style={style}>
        {!!isLoading ? (
          <div className={classes.loadingScreen}>
            <div>
              <CircularProgress
                size="4rem"
                className={classes.circularProgress}
              />
            </div>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Card;
