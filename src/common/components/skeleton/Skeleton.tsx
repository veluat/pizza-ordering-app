import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton: React.FC = () => (
  <ContentLoader
    backgroundColor={'#f3f3f3'}
    foregroundColor={'#ecebeb'}
    height={530}
    speed={2}
    viewBox={'0 0 280 530'}
    width={280}
  >
    <circle cx={'143'} cy={'133'} r={'125'} />
    <rect height={'22'} rx={'15'} ry={'15'} width={'270'} x={'4'} y={'292'} />
    <rect height={'92'} rx={'10'} ry={'10'} width={'270'} x={'4'} y={'336'} />
    <rect height={'27'} rx={'10'} ry={'10'} width={'58'} x={'16'} y={'468'} />
    <rect height={'45'} rx={'30'} ry={'30'} width={'165'} x={'104'} y={'461'} />
  </ContentLoader>
)
