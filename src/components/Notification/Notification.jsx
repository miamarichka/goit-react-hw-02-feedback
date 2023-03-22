import React from "react";
import Notiflix from 'notiflix';

export const Notification = ({ message }) => {
    const warnMessage = () => {
        setTimeout(() => {
            Notiflix.Notify.warning(`${message}`)
        }, 1000);
    }

    return (
      <>
        <h3>
          {message} {warnMessage()}
        </h3>
      </>
    );
}