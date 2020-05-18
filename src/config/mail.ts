interface IMailConfig {
  driver: 'ethereal' | 'mailgun';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'mano.martins29@gmail.com',
      name: 'Manoel Martins',
    },
  },
} as IMailConfig;
