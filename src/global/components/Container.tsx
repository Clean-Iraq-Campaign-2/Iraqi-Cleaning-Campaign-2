import { useMediaQuery } from '@react-hook/media-query';

export const Container: React.FC<{ children: React.ReactNode }> =({children}) => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');    
  return (
   <div className={`mx-auto ${isTabletOrMobile?"w-screen":"w-[80%]"}`}>{children}</div>
  )
}

