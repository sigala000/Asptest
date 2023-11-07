import styled from '@emotion/styled';
import { Card, Image } from 'antd';
import { FaAngleRight } from 'react-icons/fa';
import { CandidateEntity } from 'server/modules/candidate/entities/candidate.entity';
import { defaultImage } from 'src/shared/defaultImage';
import { CandidateCard } from './candidateCard';

const CardContainer = styled.div`
  margin: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  height: 100%;

  .name {
    font-size: 16px;
    margin-bottom: 5px;
    font-family: 'Montserrat';
  }

  .department {
    color: #777;
    font-size: 14px;
    margin-bottom: 5px;
    font-family: 'Tauri';
  }

  .level {
    color: #777;
    font-size: 14px;
    margin-bottom: 0;
    font-family: 'Tauri';
  }
`;

export const DisplayPost = ({
  post,
  candidates,
}: {
  post: string;
  candidates: CandidateEntity[];
}) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <h2 style={{ marginLeft: 5 }}>
        <FaAngleRight
          color='red'
          style={{ marginBottom: -3, marginRight: 5 }}
        />
        {post}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {candidates.map((candidate) => (
          <CandidateCard key={candidate._id} candidate={candidate} />
        ))}
        <CardContainer>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <Image
                alt='profil_image'
                height={200}
                width='100%'
                style={{ objectFit: 'cover' }}
                src=''
                fallback={defaultImage}
              />
            }
          >
            <div>
              <p className='name'>EMPTY Ballot</p>
            </div>
          </Card>
        </CardContainer>
        {candidates.length == 0 && (
          <h4 style={{ color: 'red', textAlign: 'center' }}>
            No registered candidate
          </h4>
        )}
      </div>
    </div>
  );
};
