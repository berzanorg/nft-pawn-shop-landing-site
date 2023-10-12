const Logo = () => {
    return (        
        <>
            <img className="uk-visible dark:uk-hidden w-36" src="/images/logo.png" alt="NFT Pawn Shop" loading="lazy" /> 
            <img className="uk-hidden dark:uk-visible" src="/images/logo.png" alt="NFT Pawn Shop" loading="lazy" style={{ width: '150px' }} />

        </>
    )
}

export default Logo;
