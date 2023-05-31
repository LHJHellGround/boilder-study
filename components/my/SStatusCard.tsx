import React from 'react';
import { styled, css } from 'twin.macro';

/**
 * 아이콘 / 라벨 / 데이터 / 데이터단위 / 정렬모드타입 / 카드테마타입
 */

type TAlignMode = 'horizontal' | 'vertical';
type TThemeType = 'light' | 'dark' | 'gold';

const AlignModeCss = {
  vertical: css`
    flex-direction: column;
    justify-content: center;
  `,
  horizontal: css`
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  `,
};

const ThemeTypeCss = {
  light: css`
    background-color: #fff;
    color: #000;

    .data-box {
      label {
        color: #dfdfdf;
      }
    }
  `,
  dark: css`
    background-color: #000;
    color: #fff;
  `,
  gold: css`
    background-color: #f00;
    color: #fff;
  `,
};

/**
 * alignMode: 정렬모드
 * themeType: 테마타입
 */
interface IStyleProps {
  alignMode: TAlignMode;
  themeType: TThemeType;
}

const Styles = {
  SStatusCard: styled.div<{ styleprops: IStyleProps }>`
    display: flex;
    ${(props) => AlignModeCss[props.styleprops.alignMode]};
    padding: 16px;
    ${(props) => ThemeTypeCss[props.styleprops.themeType]};
    border: 1px solid black;
    border-radius: 4px;

    .data-box {
      label {
        font-size: 16px;
      }
      .data-cont {
        font-size: 32px;
        .data {
        }
        .unit {
        }
      }
    }
  `,
};

/**
 * icon: 아이콘
 * label: 데이터 라벨
 * data: 데이터값
 * unit: 데이터 단위
 * alignMode: 정렬모드
 * themeType: 테마타입
 */
interface ISStatusCardProps {
  icon?: React.ReactNode;
  label: string;
  data: string | number;
  unit?: string;
  alignMode?: TAlignMode;
  themeType?: TThemeType;
}

/**
 * 상태카드 컴포넌트
 * @param {ISStatusCardProps}
 * @returns 상태카드 컴포넌트
 */
export default function SStatusCard({
  icon = <></>,
  label = '',
  data = '',
  unit = '',
  alignMode = 'vertical',
  themeType = 'light',
}: ISStatusCardProps) {
  return (
    <Styles.SStatusCard
      styleprops={{
        alignMode,
        themeType,
      }}
    >
      {icon && <div className='icon'>{icon}</div>}
      <div className='data-box'>
        <label htmlFor='data-cont'>{label}</label>
        <div className='data-cont' id='data-cont'>
          <span className='data'>{data}</span>
          {unit && <span className='unit'>{unit}</span>}
        </div>
      </div>
    </Styles.SStatusCard>
  );
}
