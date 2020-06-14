import React from "react";

export const ErrorProductNotFound = () => {
  return (
    <div className="container">
      <div className="product__not__found">
        <h1>Ocorreu um erro :(</h1>
        <span>
          Tente novamente ou entre em contato com o{" "}
          <a href="https://github.com/thiagojacinto/aceleradev-react-redux-ecommerce/issues">
            suporte
          </a>
          .
        </span>
      </div>
    </div>
  );
};

export default ErrorProductNotFound;
