import { Virtuoso } from 'react-virtuoso';

import data from '~/db/list.json';

const Resource = ({ title, description, resource }: { title: string; description: string; resource?: string }) => {
  return (
    <div className='border border-border rounded-lg p-4 mb-4'>
      <h6 className='mb-1'>{title}</h6>
      <p className='text-sm'>{description}</p>

      {!!resource && (
        <div className='h-96 w-full mt-4'>
          {resource.includes('youtube') ? (
            <iframe
              className='h-full w-full object-cover object-center'
              src={resource}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            />
          ) : (
            <img className='h-full w-full object-cover object-center' src={resource} alt={title} />
          )}
        </div>
      )}
    </div>
  );
};

const ReactVirtuoso = () => {
  return (
    <div className='flex flex-col'>
      <Virtuoso
        style={{ height: '70vh' }}
        data={data}
        useWindowScroll
        itemContent={(idx, item) => (
          <Resource
            key={idx}
            title={item.title}
            description={item.description}
            resource={item?.resource || undefined}
          />
        )}
      />
    </div>
  );
};

export default ReactVirtuoso;
