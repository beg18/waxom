const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '32px',
    container: {
        maxWidth: '1185px',
        fields: '30px'                                                       
    },
    oldSizeStyle: false
};

smartgrid('./src/css/libs', settings);