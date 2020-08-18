import React from 'react';
import './FeedbackRequisites.css';

const feedbackRequisites = (props) => {

  let requisites = [];
  if (props.active === 'legal') {
    requisites = [`Наименование: ${props.requisites.name}`, `ИНН: ${props.requisites.itn}`, `ОГРН: ${props.requisites.psrn}`, `КПП: ${props.requisites.iac}`, `Юридический адрес: ${props.requisites.address}`, `Телефон: ${props.requisites.phone}`, `Ген. директор: ${props.requisites.ceo}`]
  } else {
    requisites = [`Наименование: ${props.requisites.name}`, `ИНН: ${props.requisites.itn}`, `ОГРНИП: ${props.requisites.psrn}`, `Юридический адрес: ${props.requisites.address}`, `Телефон: ${props.requisites.phone}`]
  }
  return (
    <div className='Terms'>
      <h2 className='Terms__title'>Реквизиты (вставить в Javascript)</h2>
      <textarea name="Условия возврата" readOnly className="Terms__text" value={`
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>    
    <script>
        document.addEventListener('DOMContentLoaded', function(){
    if (!location.href.includes('checkout')) {
        const root = document.querySelector('.contact-info');
        const list = document.createElement('div');
        list.id = 'requisites';
        root.append(list);
        let Requisites = new Vue({
            el: '#requisites',
            data: {
                requisites: [${requisites}]
            },
            template: \`
                <ul class="requisite">
                    <li class="requisite__title">
                        Реквизиты
                    </li>
                    <li v-for="requisite in requisites">{{ requisite }}</li>
                </ul>
            \`
        })
    }
});
</script>     
      `} />
    </div>

  )
};

export default feedbackRequisites;

