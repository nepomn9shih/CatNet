import React from "react";
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
          <div className={classes.dialogItems}>
            <div className={classes.dialog + ' ' + classes.active}>
              Andrey
            </div>
            <div className={classes.dialog}>
              Sergey
            </div>
            <div className={classes.dialog}>
              Ivan
            </div>
            <div className={classes.dialog}>
              Masha
            </div>
          </div>
          <div className={classes.messages}>
            <div className={classes.message}>
              Привет!
            </div>
            <div className={classes.message}>
              Как дела?
            </div>
            <div className={classes.message}>
              Эй!
            </div>
          </div>
        </div>
    )
}

export default Dialogs