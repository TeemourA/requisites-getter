import React from 'react';

const termsOfReturn = (props) => {
  return (<textarea name="Условия возврата" readOnly className="terms" value={`<h6 style="margin-bottom: 20px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span face="Arial, serif" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span size="2" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-weight: bolder;"><span style="font-size: 14px;">Купили у нас товар и хотите вернуть? Не проблема!</span></span></span></span></span></h6><h6 style="margin-bottom: 20px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span face="Arial, serif" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span size="2" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-weight: bolder;"><span style="font-size: 14px;"><br></span></span></span></span></span><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-size: 14px;">Обратиться за возвратом денежных средств вы можете в течение 7 дней с момента покупки в интернет-магазине. Для того чтобы произвести возврат товара, который не подошел вам по размеру, модели или цвету, нужно написать заявление на возврат денежных средств и обратиться в отдел претензий по телефону: ${props.requisites.phone}, либо отправить e-mail на ${props.requisites.email}. </span></span></h6><h6 style="margin-bottom: 20px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-size: 14px;">Ваша заявка будет рассмотрена в течение 7 рабочих дней. Денежные средства будут возвращены вам путем, аналогичным оплате заказа. Товар должен быть абсолютно новым, то есть ни разу не использованным. Услуга вывоза товара нашими курьерами платная. Стоимость сообщит менеджер при согласовании даты приезда курьера.</span></span></h6><h6 style="margin-bottom: 20px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-size: 14px;"><br></span></span><span style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit; font-size: 14px;">Возврат / обмен бракованного товара</span><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-size: 14px;">&nbsp;осуществляется через отдел претензий, с которым можно связаться по телефону:&nbsp;${props.requisites.phone}, либо по e-mail: ${props.requisites.email}. В случае, если по результатам диагностики выявляется заводской брак товара, то услуги забора и доставки товара на замену, а также диагностика оплачиваются продавцом.</span></span></h6><h6 style="margin-bottom: 20px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-size: 14px;"><br></span><br style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"></span><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-size: 14px;">В случае, когда по итогам диагностики выявляется, что поломка товара была получена в процессе эксплуатации, товар замене не подлежит. Транспортные услуги и диагностика оплачиваются клиентом. Также вы можете обратиться в сторонний сервис, в этом случае диагностика будет платной, согласно прейскуранту выбранного вами сервиса.</span></span></h6><h6 style="margin-bottom: 20px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-size: 14px;"><br></span></span><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-size: 14px;">Производитель или поставщик оставляет за собой право изменить технические характеристики без предварительного уведомления.</span></span></h6><h6 style="margin-bottom: 20px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit;"><span style="font-size: 14px;"><br></span></span><span color="#333333" style="margin: 0px; padding: 0px; font-stretch: inherit; line-height: inherit; font-size: 14px;">*Внимание! Если покупатель по каким-либо причинам (не подошел размер или модель) отказывается от товара, но товар соответствует заказу и не имеет дефектов, клиент обязан оплатить полную стоимость доставки. (п.21 Правил продажи товаров дистанционным способом, утвержденных Постановлением Правительства РФ от 27.09.2007 г. № 612 "При отказе покупателя от товара продавец должен возвратить ему сумму, уплаченную покупателем в соответствии с договором, за исключением расходов продавца на доставку от покупателя возвращенного товара, не позднее чем через 10 дней с даты предъявления покупателем соответствующего требования." Абзац 5 п. 4 ст. 26,1 Закона о защите прав потребителей. П. 3 и 4 ст. 497 ГК Р. )</span></h6>`} />)
};

export default termsOfReturn;