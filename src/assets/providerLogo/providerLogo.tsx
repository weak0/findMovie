import { useState, useEffect } from 'react'
import { options } from '../../components/config/api'
import { MovieProviderInterface } from '../../components/config/interfaces'

const ProviderLogo = ({ id }: { id: number }) => {

    const [logos, setLogo] = useState<MovieProviderInterface[]>([])
    const [logosLoading, setLogosLoading] = useState<boolean>(true)

    const getProviders = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, options);
        const providers = await response.json();
        return providers.results.PL;
    }


    useEffect(() => {
        getProviders().then((data) => {
            setLogo(data);
            setLogosLoading(false);
            console.log(data)
        }
        )
    }, [id])

    if (logosLoading) {
        return null;
    }


    return (
        <>
            {logos.map((logo: MovieProviderInterface) => {
                <img src={`https://image.tmdb.org/t/p/original/${logo.logo_path}`} style={{width:'30px', height:'30px', borderRadius:'50%'}} alt={logo.provider_name} key={logo.provider_id} />
            })}
        </>
    )

}

export default ProviderLogo