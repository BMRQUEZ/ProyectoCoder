
    const mp = new MercadoPago('APP_USR-5a76a8db-9594-41e7-b14f-28744777915c');
    const bricksBuilder = mp.bricks();
    const renderPaymentBrick = async (bricksBuilder) => {
      const settings = {
        initialization: {
          amount: 100, // valor del pago a realizar
        },
        customization: {
          paymentMethods: {
            creditCard: 'all',
            debitCard: 'all',
          },
        },
        callbacks: {
          onReady: () => {
            // callback llamado cuando Brick esté listo
          },
          onSubmit: ({ paymentType, formData }) => {
            // callback llamado cuando el usuario haz clic en el botón enviar los datos
           
            if (paymentType === 'credit_card' || paymentType === 'debit_card') {
              return new Promise((resolve, reject) => {
                fetch("/processar-pago", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData)
                })
                  .then((response) => {
                    // recibir el resultado del pago
                    resolve();
                  })
                  .catch((error) => {
                    // tratar respuesta de error al intentar crear el pago
                    reject();
                  })
              });
            }
          },
          onError: (error) => {
            // callback llamado para todos los casos de error de Brick
          },
        },
      };
      window.paymentBrickController = await bricksBuilder.create(
        'payment',
        'paymentBrick_container',
        settings
      );
     };
     renderPaymentBrick(bricksBuilder);
     

  