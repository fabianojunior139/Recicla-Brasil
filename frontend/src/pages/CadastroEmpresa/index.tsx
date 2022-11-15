import './_styles.scss'

function CadastroEmpresa() {
    return (
        <section className='cadastroEmpresa-page'>

            <div className="cadastroEmpresa-page__card">
                <div className="cadastroEmpresa-page__content">

                    <h1 className='cadastroEmpresa-page__title'>Cadastre sua empresa!</h1>

                    <form className='cadastroEmpresa-page__form'>

                            <label className='cadastroEmpresa-page__label' htmlFor="razaoSocial">Razão Social</label>
                            <input className='cadastroEmpresa-page__input' type="text" name='razaoSocial' id='razaoSocial' required />

                            <label className='cadastroEmpresa-page__label' htmlFor="razaoSocial">CNPJ</label>
                            <input className='cadastroEmpresa-page__input' type="text" name='razaoSocial' id='razaoSocial' required />

                            <label className='cadastroEmpresa-page__label' htmlFor="razaoSocial">E-mail</label>
                            <input className='cadastroEmpresa-page__input' type="text" name='razaoSocial' id='razaoSocial' required />

                            <label className='cadastroEmpresa-page__label' htmlFor="razaoSocial">Senha</label>
                            <input className='cadastroEmpresa-page__input' type="text" name='razaoSocial' id='razaoSocial' required />

                        <label className='cadastroEmpresa-page__label' htmlFor="razaoSocial">Descrição da empresa</label>
                        <textarea className='cadastroEmpresa-page__textarea cadastroEmpresa-page__input' name="descricao" id="" required></textarea>

                        <button className="cadastroEmpresa-page__btn" type='submit'>Cadastrar</button>

                    </form>

                </div>
            </div>

        </section>
    )
}

export default CadastroEmpresa;
