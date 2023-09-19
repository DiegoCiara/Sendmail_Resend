import { Resend } from 'resend';
const resend = new Resend('re_FoxjvHek_4CMPABaYUcfdgWEqfkm7UpYH');

(async function() {
  try {
    const data = await resend.emails.send({
      from: 'Diego Ciara <contato@softspace.com.br>',
      to: ['suporte.diegociara@gmail.com'],
      subject: 'Seja muito bem vindo',
      html: '<strong>Esse é um exemplo claro de e-mail que está chegando em sua caixa de entrada, espero que dê certo!</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
