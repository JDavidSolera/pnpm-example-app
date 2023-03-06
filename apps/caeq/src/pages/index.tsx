import { IPromotion, promotionService } from '@phoenix/core/src/caeq';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

// export const getServerSideProps: GetServerSideProps<{
//   promotion: IPromotion;
// }> = async (ctx) => {
//   const { query } = ctx;
//   const { hash } = query;

//   console.log(hash)
//   if (!hash || typeof hash !== "string") {
//     // el hash no existe en la query o no es un string
//     return {
//       notFound: true,
//     };
//   }

//   const result = await promotionService.getPromotion(hash);

//   if (result.isLeft()) {
//     return {
//       redirect: {
//         destination: "promo-error",
//         permanent: true,
//       },
//     };
//   }

//   return {
//     props: {
//       promotion: result.get(),
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps<{ promotion: IPromotion}> = async (ctx) => {
  const { query } = ctx
  const { hash } = query
  
  if (!hash || typeof hash !== 'string') {
    return {
      notFound: true
    }
  }
  
  const result = await promotionService.getPromotion(hash as string);

  if (result.isLeft()) {
    return {
      redirect: {
        destination: 'promo-error',
        permanent: true
      }
    }
  }

  const promotion = result.get()
  return {
    props: {
      promotion
    }
  }
}

function Home({ promotion }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  return (
    <div>
      <h1>Home Caeq</h1>
    </div>
  )
}

export default Home;