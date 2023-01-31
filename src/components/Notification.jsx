import React from "react";
import Notiflix from 'notiflix';

export const Notification = ({ message }) => {
    const warnMessage = () => {
        setTimeout(() => {
            Notiflix.Notify.warning(`${message}`)
        }, 2000);
    }

    return (
      <>
        <h3>
          {message} {warnMessage()}
        </h3>
      </>
    );
}