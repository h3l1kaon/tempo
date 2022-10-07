<?php

namespace App\Entity;

use App\Repository\TrackRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TrackRepository::class)]
class Track
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $duration = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\ManyToMany(targetEntity: Playlist::class, mappedBy: 'tracks')]
    private Collection $playlists;

    #[ORM\OneToMany(mappedBy: 'publishedTracks', targetEntity: User::class)]
    private Collection $publishedBy;

    #[ORM\ManyToMany(targetEntity: Genre::class, inversedBy: 'tracks')]
    private Collection $genre;

    #[ORM\ManyToMany(targetEntity: Album::class, inversedBy: 'tracks')]
    private Collection $album;

    public function __construct()
    {
        $this->playlists = new ArrayCollection();
        $this->publishedBy = new ArrayCollection();
        $this->genre = new ArrayCollection();
        $this->album = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDuration(): ?\DateTimeInterface
    {
        return $this->duration;
    }

    public function setDuration(?\DateTimeInterface $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection<int, Playlist>
     */
    public function getPlaylists(): Collection
    {
        return $this->playlists;
    }

    public function addPlaylist(Playlist $playlist): self
    {
        if (!$this->playlists->contains($playlist)) {
            $this->playlists->add($playlist);
            $playlist->addTrack($this);
        }

        return $this;
    }

    public function removePlaylist(Playlist $playlist): self
    {
        if ($this->playlists->removeElement($playlist)) {
            $playlist->removeTrack($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getPublishedBy(): Collection
    {
        return $this->publishedBy;
    }

    public function addPublishedBy(User $publishedBy): self
    {
        if (!$this->publishedBy->contains($publishedBy)) {
            $this->publishedBy->add($publishedBy);
            $publishedBy->setPublishedTracks($this);
        }

        return $this;
    }

    public function removePublishedBy(User $publishedBy): self
    {
        if ($this->publishedBy->removeElement($publishedBy)) {
            // set the owning side to null (unless already changed)
            if ($publishedBy->getPublishedTracks() === $this) {
                $publishedBy->setPublishedTracks(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Genre>
     */
    public function getGenre(): Collection
    {
        return $this->genre;
    }

    public function addGenre(Genre $genre): self
    {
        if (!$this->genre->contains($genre)) {
            $this->genre->add($genre);
        }

        return $this;
    }

    public function removeGenre(Genre $genre): self
    {
        $this->genre->removeElement($genre);

        return $this;
    }

    /**
     * @return Collection<int, Album>
     */
    public function getAlbum(): Collection
    {
        return $this->album;
    }

    public function addAlbum(Album $album): self
    {
        if (!$this->album->contains($album)) {
            $this->album->add($album);
        }

        return $this;
    }

    public function removeAlbum(Album $album): self
    {
        $this->album->removeElement($album);

        return $this;
    }
}
