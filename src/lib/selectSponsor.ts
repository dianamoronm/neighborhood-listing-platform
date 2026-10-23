export interface SponsorCandidate {
  id: string;
  name: string;
  url: string;
  approved: boolean;
  active: boolean;
  placement: string;
  startDate: string;
  endDate: string;
  zipCodes: string[];
  priority: number;
}

interface Context {
  zip: string;
  placement: string;
  date: string;
}

export function selectSponsor(
  context: Context,
  candidates: SponsorCandidate[]
) {
  const today = new Date(context.date);

  const eligible = candidates.filter((sponsor) => {
    return (
      sponsor.approved &&
      sponsor.active &&
      sponsor.placement === context.placement &&
      today >= new Date(sponsor.startDate) &&
      today <= new Date(sponsor.endDate) &&
      sponsor.zipCodes.includes(context.zip)
    );
  });

  if (eligible.length === 0) {
    return null;
  }

  eligible.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }

    return a.id.localeCompare(b.id);
  });

  return eligible[0];
}