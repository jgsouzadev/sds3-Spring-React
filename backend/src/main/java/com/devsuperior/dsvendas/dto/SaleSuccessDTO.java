package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SaleSuccessDTO  implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	
	private Long visitead;

	private Long deals;

	public SaleSuccessDTO() {
		
	}
	
	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Long getVisitead() {
		return visitead;
	}

	public void setVisitead(Long visitead) {
		this.visitead = visitead;
	}

	public Long getDeals() {
		return deals;
	}

	public void setDeals(Long deals) {
		this.deals = deals;
	}

	public SaleSuccessDTO(Seller seller, Long visitead, Long deals) {
		super();
		this.sellerName = seller.getName();
		this.visitead = visitead;
		this.deals = deals;
	}
	
}
