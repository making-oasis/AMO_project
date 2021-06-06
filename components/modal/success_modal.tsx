import React, { useImperativeHandle } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "../../styles/modal.module.css";

const TransitionsModal = (props, ref: React.Ref<unknown>) => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    handleOpenSuccess,
  }));

  const handleOpenSuccess = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={styles.image}>
              <h2 id="transition-modal-title" className={styles.h1}>
                {props.text}
              </h2>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export const SuccessModal = React.forwardRef(TransitionsModal);
