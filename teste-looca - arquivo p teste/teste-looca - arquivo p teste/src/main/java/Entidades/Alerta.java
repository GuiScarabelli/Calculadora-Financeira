package Entidades;

public class Alerta {
    private Integer idAlerta;
    private String descricao;
    private String dtHoraAlerta;
    private String caminhoAqrquivo;
    private Integer fkComputador;

    public Integer getIdAlerta() {
        return idAlerta;
    }

    public void setIdAlerta(Integer idAlerta) {
        this.idAlerta = idAlerta;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getDtHoraAlerta() {
        return dtHoraAlerta;
    }

    public void setDtHoraAlerta(String dtHoraAlerta) {
        this.dtHoraAlerta = dtHoraAlerta;
    }

    public Integer getFkComputador() {
        return fkComputador;
    }

    public void setFkComputador(Integer fkComputador) {
        this.fkComputador = fkComputador;
    }

    public String getCaminhoAqrquivo() {
        return caminhoAqrquivo;
    }

    public void setCaminhoAqrquivo(String caminhoAqrquivo) {
        this.caminhoAqrquivo = caminhoAqrquivo;
    }
}
