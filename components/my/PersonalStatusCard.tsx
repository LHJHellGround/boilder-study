import { styled } from 'twin.macro';

const Container = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-radius: 15px;
  color: white;
  width: 350px;

  .personal-status-card__content-label {
    font-size: 24px;
    padding-bottom: 8px;
  }

  .personal-status-card__content-amount {
    font-size: 32px;
  }
`;

interface PersonStatusCardProps {
  /** 카드 색상 */
  color: 'gold' | 'darkNavy';
  /** 카드 라벨 */
  label: string;
  /** 데이터 */
  amount: number;
  /** 데이터 단위 */
  unit?: string;
  /** 아이콘 이미지 */
  iconURL: string;
}

/**
 * 1. 마크업 구조 설명: icon 외 모두 div로 통일
 * 2. css 설명: row 방향으로 flex로 나눈 뒤 가운데 정렬 후 패딩으로 바깥쪽 공간 생성. background는 gold와 navy로 받고 styledComponents에 전달하여 사용.
 * 3. 컴포넌트 설계 기준: 사용자/정보수정의 가운데에 위치하는 카드와는 별개로 설계 하였고 왼쪽은 value, 오른쪽은 아이콘을 위치시킴.
 *                   최대한 비슷하게 생긴 컴포넌트만 다룰 수 있도록 설계.
 *
 * @param {PersonStatusCardProps} { color, label, amount, unit, iconURL }
 * @return 개인 상태 카드 컴포넌트
 */
const PersonalStatusCard = ({ color, label, amount, unit, iconURL }: PersonStatusCardProps) => {
  const colorStyles = {
    gold: '#C7A14F',
    darkNavy: '#1A1A22',
  };

  return (
    <Container color={color}>
      <div className='personal-status-card__content'>
        <div className='personal-status-card__content-label'>{label}</div>
        <div className='personal-status-card__content-amount'>
          {amount}
          {unit}
        </div>
      </div>
      <i>{iconURL}</i>
    </Container>
  );
};

export default PersonalStatusCard;
