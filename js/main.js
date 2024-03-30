customSelect('select');




  const picker = new easepick.create({
    element: document.getElementById('date'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    plugins: ['RangePlugin'],
    RangePlugin: {
      tooltipNumber(num) {
        return num - 1;
      },
      locale: {
        one: 'night',
        other: 'nights',
      },
    },
  });