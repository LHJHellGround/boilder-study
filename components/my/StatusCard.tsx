import { styled } from 'twin.macro';

const StatusCardContainer = styled.div<{ theme: ITheme; isHorizontal: boolean }>`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
  ${({ isHorizontal }) => {
    return isHorizontal
      ? `
  padding: 25px;
  border-radius: 15px;
  width: 350px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  `
      : `padding: 16px;
  width: 190px;
  border-radius: 15px;
      `;
  }}
  .status-card__label {
    padding: 8px 0 4px 0;
  }

  .status-card__amount {
    margin: 4px 0;
    & > * {
      font-size: 32px;
    }
  }
`;

interface StatusCardProps {
  /** 카드 색상 */
  color: 'normal' | 'gold' | 'darkNavy';
  /** 카드 라벨 */
  label: string;
  /** 데이터 */
  amount: number | string;
  /** 데이터 단위 */
  unit?: string;
  /** 아이콘 이미지 */
  iconURL: string;
  /** 가로형 여부 */
  isHorizontal?: boolean;
}

interface ITheme {
  [key: string]: {
    background: string;
    fontColor: string;
  };
}

/**
 *
 * 1. 마크업 구조 설명: icon 외 모두 div로 통일
 * 2. css 설명: column 방향으로 flex로 나눈뒤 gap으로 공간 주는 형태
 * 3. 컴포넌트 설계 기준: 사용자/정보수정의 오른쪽에 위치하는 카드와는 서로 차별된다 생각하여 나누어서 설계 하였고 위에서부터 아이콘, 라벨, 데이터로 설계.
 *                    최대한 비슷하게 생긴 컴포넌트만 다룰 수 있도록 설계.
 *
 * @param {StatusCardProps} { iconURL, label, amount, unit }
 * @return 상태 카드 컴포넌트
 */
const StatusCard = ({ color = 'normal', iconURL, label, amount, unit = '', isHorizontal = false }: StatusCardProps) => {
  /** color theme */
  const theme = {
    normal: {
      background: '#ffffff',
      fontColor: '#000000',
    },
    gold: {
      background: '#C7A14F',
      fontColor: '#ffffff',
    },
    darkNavy: {
      background: '#1D1D23',
      fontColor: '#ffffff',
    },
  };

  /** comma separator */
  const numberWithCommas = (n: number | string) => {
    if (typeof n === 'number') return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <StatusCardContainer theme={theme[color]} isHorizontal={isHorizontal}>
      <i>{iconURL}</i>
      <div>
        <label className='status-card__label'>{label}</label>
        <p className='status-card__amount'>
          <span>{numberWithCommas(amount)}</span>
          <span>{unit}</span>
        </p>
      </div>
    </StatusCardContainer>
  );
};
export default StatusCard;
