import { Col } from 'apps/front-office/design-system/components/Grids'
import { H5, P4 } from 'apps/front-office/design-system/components/Typography'
import React from 'react'
import { maintenancePaymentAtom, maintenancePaymentFeesAtom } from '../../atoms'
import { trans } from '@mongez/localization'
import { Space } from '@mantine/core'
import CheckboxInput from 'apps/front-office/design-system/components/Form/CheckboxInput'

const ConfirmationStep = () => {
  const value = maintenancePaymentAtom.useValue()
  const fees = maintenancePaymentFeesAtom.useValue()

  const list = [
    {
      id: 1,
      text: <P4>أقر أنا [{value.username}] بصحة البيانات الواردة أعلاه وأن المعاملة المالية مرتبطة بعلاقة إيجارية حقيقية وبأن شركة "رينتاك للتطبيقات ذ.م.م" ليس لها أي صلة بهذه العلاقة الإيجارية وأنها لم تتدخل في هذا الإيجار سواء في مرحلة البحث أو التفاوض أو إبرام العقد.</P4>
    },
    {
      id: 2,
      text: <P4>كما أقر بأن شركة "رينتك" هي جهة تحويل للمبلغ المذكور أعلاه للمستفيد بقيمة {fees.fees}% كمصاريف إدارية، ويتم التحويل في خلال أربعة أيام عمل.      </P4>
    },
    {
      id: 3,
      text: <P4>
      ليس للشركة أي صلة بالمؤجر أو بالعين المؤجرة ولا يجوز لي الرجوع أو مطالبة شركة رينتك أو أي من مديريها أو موظفيها سواء بصفاتهم الشخصية أو الوظيفية بأية مطالبات أو تعويضات أو مبالغ أو حقوق أو دعاوى أو التزامات في الحال أو في المستقبل، تكون ناشئة عن أو مرتبطة أو متصلة بعقد الإيجار المبرم بين المؤجر والمستأجر أو العين المؤجرة.</P4>
    },
    {
      id: 4,
      text: <P4>
      وهذا إقرار نهائي مني لا يجوز لي الرجوع فيه أو العدول عنه، وفي حالة مخالفتي لهذا التعهد، تحتفظ شركة رينتك بحقها في الرجوع بكافة الحقوق والضمانات المقررة قانوناً.
      </P4>
    }
  ];

  return (
    <Col span={12} md={10}>
      <H5>{trans('acknowledgmentAndCommitment')}</H5>
      <Space h={32} />
      <ul style={{listStyle: "disc", direction: "rtl"}}>
        {list.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <Space h={32}/>
      <CheckboxInput 
        name="agree"
        label={trans('agree')}
        required
      />    
    </Col>
  )
}

export default ConfirmationStep