import React, { FunctionComponent, useCallback } from 'react';
import Swiper, { ReactIdSwiperProps } from 'react-id-swiper';
import { css, useTheme } from '@emotion/react';
import {
  NoticeCategory,
  useGetNoticeListQuery,
} from '../../../generated/graphql';
import { textOverflowMixin } from '../../../style';
import { useRouter } from 'next/router';
import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';

interface OwnProps {}

type Props = OwnProps;

const EventList: FunctionComponent<Props> = () => {
  const router = useRouter();
  const theme = useTheme();

  const { data: eventData } = useGetNoticeListQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    variables: {
      category: NoticeCategory.Event,
      first: '300',
    },
  });

  const edges = eventData?.getNoticeList.edges;

  if (!edges || edges.length === 0) {
    return null;
  }

  const params: ReactIdSwiperProps = {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    setWrapperSize: true,
    initialSlide: Math.floor(edges.length / 2),
    spaceBetween: 32,
    autoplay: {
      delay: 6000,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 140,
      modifier: 1,
      slideShadows: true,
    },
    rebuildOnUpdate: true,
  };

  const onClickDetail = useCallback(
    (eventId) => () => {
      router.push({
        pathname: '/notice/[noticeId]',
        query: { noticeId: eventId },
      });
    },
    [],
  );

  return (
    <div
      css={css`
        overflow: hidden;
      `}
    >
      <Swiper {...params}>
        {edges.map((edge) => (
          <div
            css={css`
              display: flex;
              flex-direction: column;
              width: 320px;
              height: 320px;
              border-radius: 8px;
              overflow: hidden;
              background: url(${edge.node.thumbnail || ''}) no-repeat;
              background-size: 100% 100%;
              justify-content: flex-end;
              position: relative;
              box-sizing: border-box;
              padding: 16px;
              box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
                rgba(0, 0, 0, 0.12) 0px 1px 10px 0px,
                rgba(0, 0, 0, 0.14) 0px 4px 5px 0px;
              opacity: 0.7;
              transition: all 0.6s ease;
              &.swiper-slide-active {
                opacity: 1;
              }
            `}
            key={edge.cursor}
          >
            {/* Background */}
            <div
              css={css`
                background: #ffffff;
                background: -webkit-linear-gradient(
                  top,
                  rgba(255, 255, 255, 0.2),
                  rgba(0, 0, 0, 0.9)
                );
                background: -moz-linear-gradient(
                  top,
                  rgba(255, 255, 255, 0.2),
                  rgba(0, 0, 0, 0.9)
                );
                background: linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.2),
                  rgba(0, 0, 0, 0.9)
                );
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                z-index: 1;
              `}
            />
            <div
              css={css`
                z-index: 2;
                display: flex;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <div
                css={css`
                  width: 70%;
                  margin-right: auto;
                `}
              >
                <Typography
                  variant={'h2'}
                  color={theme.colors.white}
                  css={css`
                    ${textOverflowMixin({ line: 1 })}
                  `}
                >
                  {edge.node.title}
                </Typography>
                <Typography
                  color={theme.colors.white}
                  css={css`
                    ${textOverflowMixin({ line: 2 })};
                  `}
                >
                  {edge.node.description}
                </Typography>
                <Typography variant={'small'} color={theme.colors.secondGray}>
                  # {edge.node.category}
                </Typography>
              </div>
              <div
                css={css`
                  display: flex;
                  justify-content: flex-end;
                `}
              >
                <Button>CLICK</Button>
              </div>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default EventList;
